//
//  RoomListVC.swift
//  Chopchop
//
//  Created by Goodnews on 2017. 2. 16..
//  Copyright © 2017년 goodnews. All rights reserved.
//

import UIKit

class RoomListVC: UIViewController {
    
    
    let scrollView: UIScrollView = {
        let sv = UIScrollView()
        return sv
    }() // 스크롤뷰
    
    let subscriptRoomsLabel: UILabel = {
        let label = UILabel()
        label.text = "구 독 방"
        label.textColor = .white
        label.font = UIFont.boldSystemFont(ofSize: 16)
        label.backgroundColor = .green
        label.textAlignment = .center
        return label
    }() // 구독방 라벨
    
    let subscriptRoomsCollectionView: UICollectionView = {
        let layout = UICollectionViewFlowLayout()
        let cv = UICollectionView(frame: .zero, collectionViewLayout: layout)
        cv.backgroundColor = .white
        return cv
    }() // 구독방 뷰
    
    
    let everyRoomsLabel: UILabel = {
        let label = UILabel()
        label.text = "전 체 방"
        label.textColor = .white
        label.font = UIFont.boldSystemFont(ofSize: 16)
        label.backgroundColor = .green
        label.textAlignment = .center
        return label
    }() // 전체방 라벨
    
    let locationListCollectionView: UICollectionView = {
        let layout = UICollectionViewFlowLayout()
        layout.scrollDirection = .horizontal
        let cv = UICollectionView(frame: .zero, collectionViewLayout: layout)
        cv.backgroundColor = UIColor.brown
        return cv
    }() // 지역 리스트 (서래마을, 대학로, 청담동, 홍대, 건대 등등)
    
    
    let everyRoomsCollectionView: UICollectionView = {
        let layout = UICollectionViewFlowLayout()
        let cv = UICollectionView(frame: .zero, collectionViewLayout: layout)
        cv.backgroundColor = .white
        
        return cv
    }() // 전체방 뷰
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        configCollectionView()
        setupViews()
        
        // Do any additional setup after loading the view.
    }
    
    
    func setupViews() {
        view.backgroundColor = .white
        title = "RoomList"
        
        view.addSubview(scrollView)
        
        scrollView.addSubview(subscriptRoomsLabel)
        scrollView.addSubview(subscriptRoomsCollectionView)
        
        scrollView.addSubview(everyRoomsLabel)
        scrollView.addSubview(locationListCollectionView)
        scrollView.addSubview(everyRoomsCollectionView)
        
        
        let width = view.frame.width
        
        scrollView.frame = view.frame
        
        subscriptRoomsLabel.frame = CGRect(x: 14, y: 8, width: width - 28, height: 24)
        subscriptRoomsCollectionView.frame = CGRect(x: 14, y: subscriptRoomsLabel.frame.maxY, width: width - 28, height: 300)
        
        
        everyRoomsLabel.frame = CGRect(x: 14, y: subscriptRoomsCollectionView.frame.maxY + 16, width: width - 28, height: 24)
        locationListCollectionView.frame = CGRect(x: 0, y: everyRoomsLabel.frame.maxY, width: width, height: 80)
        everyRoomsCollectionView.frame = CGRect(x: 14, y: locationListCollectionView.frame.maxY, width: width - 28, height: 600)
        
        scrollView.contentSize = CGSize(width: width, height: everyRoomsCollectionView.frame.maxY + 16 + 49)
        
    }
    
    
    let roomCellId = "roomCellId"
    let locationCellId = "locationCellId"
    
    
    func configCollectionView() {
        
        subscriptRoomsCollectionView.delegate = self
        subscriptRoomsCollectionView.dataSource = self
        subscriptRoomsCollectionView.register(RoomCell.self, forCellWithReuseIdentifier: roomCellId)
        
        locationListCollectionView.delegate = self
        locationListCollectionView.dataSource = self
        locationListCollectionView.register(LocationCell.self, forCellWithReuseIdentifier: locationCellId)
        
        everyRoomsCollectionView.delegate = self
        everyRoomsCollectionView.dataSource = self
        everyRoomsCollectionView.register(RoomCell.self, forCellWithReuseIdentifier: roomCellId)
        
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    
    
}


extension RoomListVC: UICollectionViewDataSource, UICollectionViewDelegateFlowLayout {
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        switch collectionView {
        case subscriptRoomsCollectionView:
            return 3
            
            
        case locationListCollectionView:
            return 20
        default:
            return 3
        }
    } // 셀 개수
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        switch collectionView {
        case subscriptRoomsCollectionView:
            let cell = collectionView.dequeueReusableCell(withReuseIdentifier: roomCellId, for: indexPath) as! RoomCell
            
            return cell
        case locationListCollectionView:
            let cell = collectionView.dequeueReusableCell(withReuseIdentifier: locationCellId, for: indexPath) as! LocationCell
            
            cell.locationLabel.text = "홍대\(indexPath.item)"
            cell.backgroundColor = .red
            return cell
        default:
            let cell = collectionView.dequeueReusableCell(withReuseIdentifier: roomCellId, for: indexPath) as! RoomCell
            
            return cell
        }
        
    } // 셀 내용
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        
        switch collectionView {
        case subscriptRoomsCollectionView:
            return CGSize(width: collectionView.frame.width, height: 99)
        case locationListCollectionView:
            return CGSize(width: 80, height: 30)
        default:
            return CGSize(width: collectionView.frame.width, height: 99)
        }
        
    } // 셀 사이즈
    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        switch collectionView {
        case locationListCollectionView:
            break
        default:
            self.navigationController?.pushViewController(RoomVC(), animated: true)
        }
    } // 클릭시
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, insetForSectionAt section: Int) -> UIEdgeInsets {
        
        switch collectionView {
        case subscriptRoomsCollectionView:
            return UIEdgeInsets(top: 0, left: 14, bottom: 0, right: 14)
        case locationListCollectionView:
            return UIEdgeInsets(top: 4, left: 14, bottom: 4, right: 14)
        default:
            return UIEdgeInsets(top: 0, left: 14, bottom: 0, right: 14)
        }
        
    } // 콜렉션뷰 여백
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, minimumLineSpacingForSectionAt section: Int) -> CGFloat {
        return 4
    }
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, minimumInteritemSpacingForSectionAt section: Int) -> CGFloat {
        return 4
    }
}


